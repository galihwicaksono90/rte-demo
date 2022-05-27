import { useState } from "react";
import RichTextEditor from "jodit-react";
/* import { RichTextEditor } from "@mantine/rte"; */
import {
  Stack,
  Text,
  Group,
  TypographyStylesProvider,
  Container,
  Button,
  Title,
} from "@mantine/core";

export default function Example() {
  const [content, setContent] = useState("");

  return (
    <Container size={1128}>
      <Stack spacing={40} pt={20}>
        <Group position="apart">
          <Text variant="link" href="https://xdsoft.net/jodit/" component="a">
            <Title>Jodit-react</Title>
          </Text>
          <Button onClick={() => console.log(content)}>
            Log Raw Contents to Console
          </Button>
        </Group>
        <TypographyStylesProvider>
          <RichTextEditor
            value={content}
            config={{ uploader: { insertImageAsBase64URI: true } }}
            onBlur={(newContent) => setContent(newContent)}
            onChange={() => {}}
          />
        </TypographyStylesProvider>
        <TypographyStylesProvider>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </TypographyStylesProvider>
      </Stack>
    </Container>
  );
}
