import { Component, OnInit } from '@angular/core';
import {CollaborationService} from '../../services/collaboration.service';
import {ActivatedRoute, Params} from '@angular/router';
import { collectExternalReferences } from '@angular/compiler/src/output/output_ast';
declare const ace: any;
@Component({

  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  sessionId: string;
  editor:any;
  languages: string[] = ['java','python'];
  language: string = 'java';
  defaultContent ={
    'java':`public class Example {
    public static void main(String[] args){
        //Type your Java code here
    }
    }`,
    'python':`class Solution:
    def example():
      #Write your Python code here`
  }
  constructor(private collaboration: CollaborationService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.sessionId = params['id'];
      this.initEditor();
      this.collaboration.restoreBuffer();
    });
    
    }

  initEditor(): void{
    this.editor = ace.edit("editor");
    this.editor.setTheme("ace/theme/eclipse");
    this.resetEditor();
    this.editor.$blockScrolling = Infinity;
    this.collaboration.init(this.editor,this.sessionId);
    this.editor.lastAppliedChange = null;

    //reg change callback
    this.editor.on('change',(e)=>{
      console.log('editor change:'+ JSON.stringify(e));
      if (this.editor.lastAppliedChange ! = e){
        this.collaboration.change(JSON.stringify(e));
      }
    });
  }


  resetEditor(): void{
    this.editor.setValue(this.defaultContent[this.language]);
    this.editor.getSession().setMode("ace/mode/"+ this.language.toLowerCase());
  }

  setLanguage(language:string): void{
    this.language = language;
    this.resetEditor();
  }
  submit():void{
    const userCode = this.editor.getValue();
    console.log(userCode);
  }

}
