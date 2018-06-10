export class SecretQuestions
{
  questions: SecretQuestion[];
}

export class SecretQuestion
{
  id: number;
  question: String;
}

export class AdminCreationFormModel
{
  firstName: String;
  lastName: String;
  middleName: String;
  email: String;
  phoneNumber: String;
  city: String;
  secretQuestionId: number;
  secretAnswer: String;
}
