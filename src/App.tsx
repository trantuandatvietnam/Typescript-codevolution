import Text from "./htmls/Text";

function App() {
  return (
    <div className="App">
      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor="somethingId" size="sm" color="secondary">
        Label
      </Text>
    </div>
  );
}

export default App;
