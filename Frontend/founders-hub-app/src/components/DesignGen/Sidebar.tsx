import React, { useState } from 'react';
import { Box, TextField, Select, MenuItem, FormControl, InputLabel, Button, SelectChangeEvent } from '@mui/material';

interface MyComponentProps {
    updateDiagram: (formData: any) => void;
    handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleClearScreen: () => void;
  }

const Sidebar: React.FC<MyComponentProps> = ({updateDiagram, handleFileUpload, handleClearScreen}) => {
    const [formData, setFormData] = useState({
        responseTime: '',
        throughput: '',
        authentication: '',
        authorization: '',
        uptime: '',
        backup: '',
        recovery: '',
        monitoring: '',
        budget: '',
        costEstimation: '',
        licensing: '', 
        requirements: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name as string]: value,
        }));
    };
    const handleSelectChange = (event: SelectChangeEvent<string>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name as string]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        updateDiagram(formData);
    };

    const clearScreen = () => {
        setFormData({
            responseTime: '',
            throughput: '',
            authentication: '',
            authorization: '',
            uptime: '',
            backup: '',
            recovery: '',
            monitoring: '',
            budget: '',
            costEstimation: '',
            licensing: '',
            requirements: '',
        });
        handleClearScreen();
    }

    return (
<Box
          sx={{
            height: '100%',
            border: '1px solid black',
            padding: 2,
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ padding: 2, overflow: 'auto' }}>
          <Box sx={{ padding: 2, width: 300, overflow: 'auto' }}>
            <form onSubmit={handleSubmit}>
                <TextField
                    name="responseTime"
                    label="Response Time (ms)"
                    type="number"
                    value={formData.responseTime}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="throughput"
                    label="Throughput (requests per second)"
                    type="number"
                    value={formData.throughput}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel>Authentication Mechanism</InputLabel>
                    <Select
                        name="authentication"
                        value={formData.authentication}
                        onChange={handleSelectChange}
                    >
                        <MenuItem value="OAuth">OAuth</MenuItem>
                        <MenuItem value="JWT">JWT</MenuItem>
                        <MenuItem value="Basic Auth">Basic Auth</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <InputLabel>Authorization Mechanism</InputLabel>
                    <Select
                        name="authorization"
                        value={formData.authorization}
                        onChange={handleSelectChange}
                    >
                        <MenuItem value="Role-Based Access Control">Role-Based Access Control</MenuItem>
                        <MenuItem value="Attribute-Based Access Control">Attribute-Based Access Control</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    name="uptime"
                    label="Uptime Requirement (%)"
                    type="number"
                    value={formData.uptime}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel>Backup Frequency</InputLabel>
                    <Select
                        name="backup"
                        value={formData.backup}
                        onChange={handleSelectChange}
                    >
                        <MenuItem value="Daily">Daily</MenuItem>
                        <MenuItem value="Weekly">Weekly</MenuItem>
                        <MenuItem value="Monthly">Monthly</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <InputLabel>Recovery Mechanism</InputLabel>
                    <Select
                        name="recovery"
                        value={formData.recovery}
                        onChange={handleSelectChange}
                    >
                        <MenuItem value="Automated">Automated</MenuItem>
                        <MenuItem value="Manual">Manual</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <InputLabel>Monitoring</InputLabel>
                    <Select
                        name="monitoring"
                        value={formData.monitoring}
                        onChange={handleSelectChange}
                    >
                        <MenuItem value="Enabled">Enabled</MenuItem>
                        <MenuItem value="Disabled">Disabled</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    name="budget"
                    label="Budget ($/month)"
                    type="number"
                    value={formData.budget}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="requirements"
                    label="Elaborate Requirements"
                    multiline
                    rows={10}
                    value={formData.requirements}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    placeholder="Example: Create a design diagram for a web application that allows users to manage their personal finances. The application should have the following features:

1. **User Authentication**: Users should be able to sign up, log in, and log out. Use OAuth for authentication.
2. **Dashboard**: After logging in, users should see a dashboard that displays an overview of their financial status, including total income, total expenses, and current balance.
3. **Expense Tracking**: Users should be able to add, edit, and delete expenses. Each expense should have a category (e.g., Food, Transportation, Entertainment), amount, and date.
4. **Income Tracking**: Users should be able to add, edit, and delete income entries. Each income entry should have a source (e.g., Salary, Freelance, Investments), amount, and date.
5. **Budgeting**: Users should be able to set monthly budgets for different categories. The application should display how much of the budget has been used and how much is remaining.
6. **Reports**: Users should be able to generate reports that show their spending and income over time. The reports should be available in both graphical and tabular formats.
7. **Settings**: Users should be able to update their profile information, change their password, and configure notification preferences.

The design diagram should include the following components:
- **Frontend**: Built with React, including components for the dashboard, expense tracking, income tracking, budgeting, reports, and settings.
- **Backend**: Built with Node.js and Express, including routes for user authentication, expense management, income management, budgeting, and report generation.
- **Database**: Use MongoDB to store user data, expenses, income entries, and budgets.
- **Authentication Service**: Use OAuth for user authentication.
- **API Gateway**: Use an API gateway to manage and route requests between the frontend and backend services.

Please include the relationships between these components and any necessary data flow."
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Generate Design
                </Button>
            </form>
        </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 }}>
            <Button variant="contained" component="label">
              Upload File
              <input
                type="file"
                accept=".md"
                hidden
                onChange={handleFileUpload}
              />
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={clearScreen}
            >
              Clear Screen
            </Button>
          </Box>
        </Box>
    );
};

export default Sidebar;