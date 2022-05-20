import { useState } from "react";
import { RichTextEditor } from "@mantine/rte";
import {
  Modal,
  Group,
  Container,
  Button,
  TypographyStylesProvider,
  Box,
  Stack,
} from "@mantine/core";

function App() {
  const [value, setValue] = useState("");
  const [showRaw, setShowRaw] = useState(false);

  const onChange = (data: string) => {
    setValue(data);
  };

  return (
    <div className="App">
      <Container size={1200} my={20}>
        <Group py={20} position="apart">
          <h1>Rich Text Editor Demo</h1>
          <Button onClick={() => setShowRaw((o) => !o)}>Show Raw Value</Button>
        </Group>
        <RichTextEditor onChange={onChange} value={value} />
        <Stack spacing={20}>
          <h1>Rendered</h1>
          <TypographyStylesProvider>
            <div dangerouslySetInnerHTML={{ __html: value }} />
          </TypographyStylesProvider>
        </Stack>
      </Container>
      <Modal
        opened={showRaw}
        onClose={() => setShowRaw((o) => !o)}
        title={<h1>Output Value</h1>}
        size={1200}
      >
        <Button onClick={() => console.log(value)} mb={20}>
          Print to Console
        </Button>
        <Box sx={{ background: "#eee" }}>{value}</Box>
      </Modal>
    </div>
  );
}

export default App;
