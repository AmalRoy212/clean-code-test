class JsonPresenter {
    static present(data: any): string {
      return JSON.stringify(data);
    }
  }
  
  export default JsonPresenter;
  