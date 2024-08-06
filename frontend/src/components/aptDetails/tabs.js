import React from 'react';
import { Card, CardContent, Button, Typography, List, ListItem } from '@mui/material';

const handlePreview = (fileUrl) => {
  if (!fileUrl) {
    console.error('File URL is invalid or missing:', fileUrl);
    return;
  }
  const formattedFileUrl = fileUrl.startsWith('/') ? fileUrl : `/${fileUrl}`;
  const fullUrl = `http://localhost:3000${formattedFileUrl}`;
  window.open(fullUrl, '_blank');
};

const DocumentTabs = ({ documents }) => (
  <List>
    {documents.map((document) => (
      <ListItem key={document._id} style={{ marginBottom: 10 }}>
        <Card style={{ width: '100%' }}>
          <CardContent>
            <Typography variant="h6">{document.filename}</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handlePreview(document.fileUrl)}
              style={{ marginTop: 10 }}
            >
              Preview
            </Button>
          </CardContent>
        </Card>
      </ListItem>
    ))}
  </List>
);

export default DocumentTabs;