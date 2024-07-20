import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import DocCard from './docCard';

const DocumentTabs = ({ documents }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange}>
        {Object.keys(documents).map((category, index) => (
          <Tab label={category} key={index} />
        ))}
      </Tabs>
      {Object.keys(documents).map((category, index) => (
        <Box role="tabpanel" hidden={value !== index} key={index}>
          {value === index && (
            <Box>
              {documents[category].map((doc, docIndex) => (
                <DocCard key={docIndex} title={doc.title} date={doc.date} />
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default DocumentTabs;
