export interface IGenFile {
    filename: string;
    template: string | object;
    path?: string;
    update?: boolean;
}
declare const genFile: ({ filename, template, path, update }: IGenFile) => Promise<string>;
export default genFile;
