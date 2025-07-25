import { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  CircularProgress,
  Alert,
  Card,
  CardContent,
  Box,
} from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { Email, Phone, LocationOn, Send } from '@mui/icons-material';

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .min(5, 'Too short!'),
    email: Yup.string()
      .email('Invalid email format')
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email must be in format: example@gmail.com')
      .required('Email is required'),
    message: Yup.string()
      .required('Message is required')
      .min(10, 'Message must be at least 10 characters long'),
  });
  

  const handleSubmit = (values, { resetForm }) => {
    setIsSubmitting(true);
    setFormStatus('');

    emailjs.send(
      'service_bljv003',      // Replace with your EmailJS service ID
      'template_bxnqksk',     // Replace with your EmailJS template ID
      values,
      '5pdpE_sHrxlMq8_MF'          // Replace with your EmailJS user ID
    )
    .then(() => {
      setFormStatus('success');
      resetForm();
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      setFormStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: '100px', marginBottom: '50px' }}>
      <Typography variant="h3" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        We’re here to help! Please fill out the form below and we’ll get back to you as soon as possible!
      </Typography>
      <br /><br />

      <Grid container spacing={10}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Card elevation={3} sx={{ borderRadius: '12px', backgroundColor: '#fafafa', flex: 1 }}>
            <CardContent>
              <Formik
                initialValues={{ name: '', email: '', message: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isValid, touched }) => (
                  <Form>
                    <Field
                      as={TextField}
                      name="name"
                      label="Name"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      error={touched.name && !!ErrorMessage}
                      helperText={<ErrorMessage name="name" />}
                      sx={{ marginBottom: '10px' }}
                    />
                    <Field
                      as={TextField}
                      name="email"
                      label="Email"
                      type="email"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      error={touched.email && !!ErrorMessage}
                      helperText={<ErrorMessage name="email" />}
                      sx={{ marginBottom: '10px' }}
                    />
                    <Field
                      as={TextField}
                      name="message"
                      label="Message"
                      fullWidth
                      multiline
                      rows={4}
                      margin="normal"
                      variant="outlined"
                      error={touched.message && !!ErrorMessage}
                      helperText={<ErrorMessage name="message" />}
                      sx={{ marginBottom: '20px' }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      disabled={isSubmitting || !isValid}
                      startIcon={<Send />}
                      sx={{
                        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                        color: 'white',
                        marginTop: '20px',
                        padding: '10px',
                        borderRadius: '30px',
                      }}
                    >
                      {isSubmitting ? <CircularProgress size={24} /> : 'Submit'}
                    </Button>
                    {formStatus === 'success' && (
                      <Alert severity="success" sx={{ marginTop: '20px' }}>
                        Message sent successfully!
                      </Alert>
                    )}
                    {formStatus === 'error' && (
                      <Alert severity="error" sx={{ marginTop: '20px' }}>
                        Something went wrong. Please try again later.
                      </Alert>
                    )}
                  </Form>
                )}
              </Formik>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Box sx={{ padding: '80px', borderRadius: '12px', backgroundColor: '#fafafa', flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              Additional Contact Info
            </Typography>
            <Box display="flex" alignItems="center" sx={{ marginBottom: '30px' }}>
              <Email sx={{ color: 'primary.main', marginRight: '10px' }} />
              <Typography variant="body1">Allbasit@gmail.com</Typography>
            </Box>
            <Box display="flex" alignItems="center" sx={{ marginBottom: '30px' }}>
              <Phone sx={{ color: 'primary.main', marginRight: '10px' }} />
              <Typography variant="body1">+92 347549550</Typography>
            </Box>
            <Box display="flex" alignItems="center" sx={{ marginBottom: '30px' }}>
              <LocationOn sx={{ color: 'primary.main', marginRight: '10px' }} />
              <Typography variant="body1">Almadar Chowk, Skardu, Gilgit-Baltistan</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactPage;
