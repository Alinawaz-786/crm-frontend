import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
function App() {
  let items = ["New York", "Canada", "Zurich", "London", "Genava"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleSelectItemIndex = (index: number) => {
    console.log(index);
  };
  return <div className="container">
    <Button children="" onClick={() => console.log("Clicked")} color="primary"></Button>
    <Alert>Hello <span>World</span></Alert >
    <ListGroup items={items} heading={"City"} onSelectItem={handleSelectItem} onSelectItemIndex={handleSelectItemIndex}></ListGroup>
  </div>
}
export default App;