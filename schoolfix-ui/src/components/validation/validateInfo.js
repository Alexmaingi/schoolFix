// export default function validateInfo(values) {
//   let errors = {};

//   if (!values.schoolname.trim()) {
//     errors.schoolname = "School Name required";
//   }

//   if (!values.email) {
//     errors.email = "School Email required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = "School Email Address is invalid";
//   }

//   if (!values.password) {
//     errors.password = "Password is required";
//   } else if (values.password.length < 6) {
//     errors.password = "Password needs to be 6 characters";
//   }

//   if (!values.password2) {
//     errors.password2 = "Password is required";
//   } else if (values.password2 !== values.password) {
//     errors.password2 = "Pessword do not match";
//   }
//   return errors;
// }


export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Username required';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = 'Phone Number is required';
    } else if (values.phoneNumber.length < 10) {
      errors.phoneNumber = 'Phone Number needs to be 10 characters or more';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
  
    if (!values.password2) {
      errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match';
    }
    return errors;
  }