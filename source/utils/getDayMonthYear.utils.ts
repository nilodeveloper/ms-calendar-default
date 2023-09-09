export const getDayMonthYear = (today: any) => {
    let dia = today.slice(0,2)
    let mes = today.slice(3,5)
    const ano = today.slice(6,10)

    if(dia[0]=="0"){
        dia = dia[1]
    }
    
    if(mes[0]=="0"){
        mes = mes[1]
    }

    return {dia,mes,ano}
}