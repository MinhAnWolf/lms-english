import { environment } from "src/environments/environment";

export class CommandURL {
    public static API_URL = "/api/learning-atn";

    //Account
    public static ACCOUNT = environment.BACKEND_ADDRESS + CommandURL.API_URL + "/account"
    public static GET_ALL_ACCOUNT = this.ACCOUNT + "/getAll"
    public static LOGIN_ACCOUNT = this.ACCOUNT + "/login"
    public static REGISTER_ACCOUNT = this.ACCOUNT + "/register"
    public static UPDATE_ACCOUNT = this.ACCOUNT + "/update"
    public static DELETE_ACCOUNT = this.ACCOUNT + "/delete"
    public static ISLOGIN_ACCOUNT = this.ACCOUNT + "/check-login"
    public static LOGINOUT_ACCOUNT = this.ACCOUNT + "/login-out"
    public static CHAGE_PASSWORD = this.ACCOUNT + "/change-password"
    public static CHECK_ROLE = this.ACCOUNT + "/check-role"

    //Subject
    public static SUBJECT = environment.BACKEND_ADDRESS + CommandURL.API_URL + '/subject';
    public static GET_ALL_SUBJECT = CommandURL.SUBJECT + '/getAll';
    public static CREATE_SUBJECT = CommandURL.SUBJECT + '/create';
    public static DELETE_SUBJECT = CommandURL.SUBJECT + '/delete';
    public static UPDATE_SUBJECT = CommandURL.SUBJECT + '/update';


    //Book
    public static BOOK = environment.BACKEND_ADDRESS + CommandURL.API_URL + '/book';
    public static GET_ALL_BOOK = CommandURL.BOOK + '/getAll';
    public static CREATE_BOOK = CommandURL.BOOK + '/create';
    public static DELETE_BOOK = CommandURL.BOOK + '/delete';
    public static UPDATE_BOOK = CommandURL.BOOK + '/update';
    public static UPLOAD_BOOK = CommandURL.BOOK + '/upload';

    //unit
    public static UNIT = environment.BACKEND_ADDRESS + CommandURL.API_URL + '/unit';
    public static GET_ALL_UNIT = CommandURL.UNIT + '/getAll'
    public static CREATE_UNIT = CommandURL.UNIT + '/create'
    public static UPDATE_UNIT = CommandURL.UNIT + '/update'
    public static DELETE_UNIT = CommandURL.UNIT + '/delete'

    //Lesson
    public static LESSON = environment.BACKEND_ADDRESS + CommandURL.API_URL + '/lesson';
    public static GET_ALL_LESSON = CommandURL.LESSON + '/getAll'
    public static GET_BY_BOOK_AND_UNIT_LESSON = CommandURL.LESSON + '/getby-book-unit'
    public static CREATE_LESSON = CommandURL.LESSON + '/create'
    public static DELETE_LESSON = CommandURL.LESSON + '/delete'
    public static UPDATE_LESSON = CommandURL.LESSON + '/update'
    public static UPLOAD_LESSON = CommandURL.LESSON + '/upload'
    public static SHOW_LESSON = CommandURL.LESSON + '/show'

}