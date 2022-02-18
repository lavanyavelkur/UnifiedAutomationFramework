const UNAME_TXT_FIELD = '~usernameTextField'
const PASSWORD_TXT_FIELD = '~passwordTextField'

class config {

    get uname_txt_field(){
        return $(UNAME_TXT_FIELD)
    }

    get password_txt_field(){
        return $(PASSWORD_TXT_FIELD)
    }

}
export default config