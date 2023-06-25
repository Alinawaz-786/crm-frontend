function Message() {
  const _name = "ALI";
  if (_name) return <h1>Hello {_name}</h1>;
  else return <h1>Hello world</h1>;
}

export default Message;
