from cloudAMQP_client import CloudAMQPClient


CLOUDAMQP_URL = "amqp://ivqmnkbx:wwBqOIQeF5gZMhJuKnHQSkWSG6PqnWyN@donkey.rmq.cloudamqp.com/ivqmnkbx"
TEST_QUEUE_NAME = "test"

def test_basic():
    client = CloudAMQPClient(CLOUDAMQP_URL,TEST_QUEUE_NAME)

    sentMsg = {"test":"test"}
    client.sendMessage(sentMsg)

    receivedMsg = client.getMessage()

    assert sentMsg == receivedMsg
    print("pass!")

if __name__ == "__main__":
    test_basic()