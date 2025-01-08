import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import AppTheme from './theme/AppTheme';
import { SitemarkIcon } from './CustomIcons';
import ColorModeSelect from './theme/ColorModeSelect';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: '100vh',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
}));

export default function SignUp(props) {
  const [formErrors, setFormErrors] = React.useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formValues = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      gender: data.get('gender'),
      dob: data.get('dob'),
      ethnicity: data.get('ethnicity'),
      email: data.get('email'),
      password: data.get('password'),
    };

    // Validate form fields
    const errors = {};
    if (!formValues.firstName) errors.firstName = 'First name is required.';
    if (!formValues.lastName) errors.lastName = 'Last name is required.';
    if (!formValues.gender) errors.gender = 'Gender is required.';
    if (!formValues.dob) errors.dob = 'Date of birth is required.';
    if (!formValues.ethnicity) errors.ethnicity = 'Ethnicity is required.';
    if (!formValues.email || !/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formValues.password || formValues.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long.';
    }

    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', formValues);
    }
  };

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
      <SignUpContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <SitemarkIcon />
          <Typography component="h1" variant="h4">
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <FormControl>
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <TextField
                name="firstName"
                id="firstName"
                placeholder="John"
                error={!!formErrors.firstName}
                helperText={formErrors.firstName}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <TextField
                name="lastName"
                id="lastName"
                placeholder="Doe"
                error={!!formErrors.lastName}
                helperText={formErrors.lastName}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="gender">Gender</FormLabel>
              <Select
                name="gender"
                id="gender"
                defaultValue=""
                error={!!formErrors.gender}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Select your gender
                </MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
              <Typography color="error" variant="caption">
                {formErrors.gender}
              </Typography>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="dob">Date of Birth</FormLabel>
              <TextField
                name="dob"
                id="dob"
                type="date"
                error={!!formErrors.dob}
                helperText={formErrors.dob}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="ethnicity">Ethnicity</FormLabel>
              <TextField
                name="ethnicity"
                id="ethnicity"
                placeholder="e.g., Caucasian, Asian"
                error={!!formErrors.ethnicity}
                helperText={formErrors.ethnicity}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                name="email"
                id="email"
                placeholder="your@email.com"
                error={!!formErrors.email}
                helperText={formErrors.email}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                name="password"
                id="password"
                type="password"
                placeholder="••••••"
                error={!!formErrors.password}
                helperText={formErrors.password}
              />
            </FormControl>
            <Button type="submit" fullWidth variant="contained">
              Sign up
            </Button>
          </Box>
          <Divider>
            <Typography sx={{ color: 'text.secondary' }}>or</Typography>
          </Divider>
          <Typography sx={{ textAlign: 'center' }}>
            Already have an account?{' '}
            <Link href="/" variant="body2">
              Sign in
            </Link>
          </Typography>
        </Card>
      </SignUpContainer>
    </AppTheme>
  );
}
