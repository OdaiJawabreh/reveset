export interface FormField {
    id: number;
    name: string;
    fieldType: string;
    minLength?: number;
    maxLength?: number;
    defaultValue: string;
    required: boolean;
    listOfValues1?: string[];
  };

export  interface FormData {
    [key: string]: string;
  }