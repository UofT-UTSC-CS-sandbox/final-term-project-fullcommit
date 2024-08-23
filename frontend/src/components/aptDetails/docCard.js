import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material';

const DocCard = ({ title, date }) => (
  <Card className="docCard">
    <CardContent>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="subtitle1">{date}</Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Preview</Button>
    </CardActions>
  </Card>
);

export default DocCard;

<Button size="small">Download</Button>