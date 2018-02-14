
import mongodb_client as client

def test_basic():
    print('tst0 pass')
    db = client.get_db('tap-news')
    db.test.drop()
    assert db.test.count()==0
    print('tst0 pass')
    db.test.insert({'test':1})
    assert db.test.count()==1
    print('tst1 pass')

    db.test.drop()
    assert db.test.count()==0

    print('tst2 pass')
if __name__ == "__main__":
    test_basic()


