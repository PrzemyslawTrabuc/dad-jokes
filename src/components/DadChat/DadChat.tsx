import Message from "./Message";
function DadChat() {
  return (
    <div className="container mx-auto px-4 flex-col flex ">
      <Message MessageContent="Dad Joke HERE" Author="Dad"></Message>
      <Message MessageContent="OMG DAD!?" Author="Me"></Message>
      <Message MessageContent="Dad Joke HERE" Author="Dad"></Message>
    </div>
  );
}

export default DadChat;
