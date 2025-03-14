import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { registerUser } from '../utils/auth'; // Update with path to registerUser

function RegisterForm({ user, updateUser }) {
  const [formData, setFormData] = useState({
    uid: user?.uid || '',
    name: '',
    nation: '',
    favoriteDriver: '',
    favoriteCircuit: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData).then(() => updateUser(user.uid));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Got a name, nerd?</Form.Label>
        <Form.Control
          as="textarea"
          name="name"
          required
          placeholder="Enter your name"
          onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))}
        />

        <Form.Text className="text-muted">shh</Form.Text>
        <Form.Label>Who is your favorite driver?</Form.Label>
        <Form.Control as="textarea" name="favoriteDriver" required placeholder="choose a favorite driver" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />

        <Form.Text className="text-muted">shh</Form.Text>
        <Form.Label>What is your favorite circuit in formula 1?</Form.Label>
        <Form.Control as="textarea" name="favoriteCircuit" required placeholder="favorite F1 circuit?" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />

        <Form.Text className="text-muted">shh</Form.Text>
        <Form.Label>What country are you from?</Form.Label>
        <Form.Control
          as="textarea"
          name="nation"
          required
          placeholder="Choose a country"
          value={formData.nation}
          onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))}
        />
        <Form.Text className="text-muted">shh</Form.Text>

      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

RegisterForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }).isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default RegisterForm;
