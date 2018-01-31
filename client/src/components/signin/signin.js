
import React from 'react'

const styles = {
  formDiv: {
    border: '1px solid #31ace0',
    width: '300px',
    height: '350px',
    background: '#b5e4f8'
  },
  formGroup: {
  	padding: "10px"
  },
  label: {
  	margin: "0px 5px 0px 0px"
  }
};

class SignIn extends React.Component {

	render(){
		return (
			<div className="formDiv card" style={styles.formDiv}>
				<form>
					<h3>Sign In</h3>
					<img src="../../../public/logo.png" width="150px" height="75px" alt="bright kids logo"/>

					<div className="form-group" style={styles.formGroup}>
						<label for="emailInput" style={styles.label}>Email address:</label>
				    <input type="email" className="form-control" name="emailInput" placeholder="name@example.com" />
					</div>

					<div className="form-group" style={styles.formGroup}>
				    <label for="inputPassword" style={styles.label}>Password:</label>
				    <input type="password" className="form-control" name="passwordInput" placeholder="password" />
			    </div>

			    <button>Submit</button>

				</form>
			</div>
		)
	}
} 

export default SignIn;