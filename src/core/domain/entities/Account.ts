export interface Account {
  base :{
    props: {
      baseName: string,
      contractId: {
        value: string
      }
    }
    _id:{
      value: string
    }
    contract:{
      props:{
        contractName: string
      }
      _id: {
        value: string
      }
    }
  }
  cpf: string
      
}
export interface AccountCreate{
  name:string
}