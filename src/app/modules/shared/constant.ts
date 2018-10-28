
export const loginUrl: string = 'admins/admin-login';
export const changePassword: string = 'admins/admin-change-password';
export const logeditSettinginUrl: string = 'admins/admin-edit-setting';

export const getAllAdminUsers: string = 'admins/sub-admin-list';
export const activeDeactiveAdmin: string = "admins/sub-admin-active-deactive"
export const deleteSubadmin: string = "admins/sub-admin-delete"


export const accountUsersList: string = 'admins/user-list-admin?';
export const enableDisableAccount: string = 'admins/user-active-deactive';
export const accountDetails: string = 'admins/user-info-admin?userId=';
export const addSubadmmin: string = 'admins/add-sub-admin';
export const getSubadminById: string = 'admins/sub-admin-edit';

export const getAllVendor: string = 'admins/vendor-list-admin?';
export const vendorDetails: string = 'admins/vendor-info-admin?vendorId=';
export const enableDisableVendor: string = 'admins/vendor-active-deactive';




export const validationMessage = {
    'name': [
      { type: 'required', message: 'Username is required' },
      { type: 'minlength', message: 'Username must be at least 5 characters long' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Your username must contain only numbers and letters' },
      { type: 'validUsername', message: 'Your username has already been taken' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'areEqual', message: 'Password mismatch' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],
    'oldPassword': [
        { type: 'required', message: 'Old password is required' },
        { type: 'minlength', message: 'Old password must be at least 5 characters long' },
      ],
    'phone': [
      { type: 'required', message: 'Phone is required' },
      { type: 'minlength', message: 'Phone must be at least 9 characters long' },
      { type: 'maxlength', message: 'Phone cannot be more than 10 characters long' },
      { type: 'pattern', message: 'Phone must contain only numbers' },
    ]
    }




