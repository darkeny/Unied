export interface Declaration {
  id_declaration: number;
  id_student: number;
  declaration_type: string;
  issue_date: Date;
  expiry_date?: Date;
  reason?: string;
  copy_number?: string;
  pdf_document?: string;
  status: string;
  signed_by?: string;
}