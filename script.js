// Escreva seu código aqui
let array = [10,30,40]

function newForEach(array,callback)
{
    for(let index = 0;index < array.length;index++)
    {
        callback(array[index],index,array)
    }
}
function newMap(array,callback)
{
    let arrayRetorno = []
    for(let index = 0; index < array.length;index++)
    {
        arrayRetorno.push(callback(array[index],index,array))
    }
    return arrayRetorno
}
function newFilter(array,callback)
{
    let arrayRetorno = []
    for(let index = 0 ; index < array.length;index++)
    {
        if(callback(array[index],index,array))
        {
            arrayRetorno.push((array[index]))
        }
    }
    return arrayRetorno
}
let filtro = newFilter(array,function(el,index,array)
{
    return typeof el == "number"
})
function newFind(array,callback)
{
    let arrayRetorno = []
    for(let index = 0;index < array.length;index++)
    {
        if(callback(array[index],index,array))
        {
            arrayRetorno.push(array[index])
            break
        }
    }
    if(arrayRetorno.length > 0)
    {
        return arrayRetorno
    }
    return undefined
}
function newIndexOf(array,el,pontoInicial)
{
    if(typeof pontoInicial == "number" && pontoInicial < 0)
    {
        pontoInicial = Math.abs(pontoInicial)
        pontoInicial = array.length - pontoInicial

        for(let index = 0;index < array.length;index++)
        {
            if(index >= pontoInicial)
            {
                if(el == array[index])
                {
                    return index
                }   
            }
            else
            {
             return -1   
            }
        }                                        
    }
    if(typeof pontoInicial == "number" && pontoInicial >= 0)
    {
        for(let index = 0; index < array.length; index++)
        {
            if(index >= pontoInicial)
            {
                if(el == array[index])
                {
                    return index
                }
            }
            else
            {
                return -1
            }
        }
    }
    for(let index = 0;index < array.length;index++)
    {
        if(el == array[index])
        {
            return index
        }
    }
    return -1
}
function newIncludes(array,el)
{
    for(let index = 0;index < array.length;index++)
    {
        if(el == array[i])
        {
            return true
        }
    }
    return false
}
function newReduce(array,callback,valorInicialContador = 0)
{ 
    let count = valorInicialContador
    for(let index = 0;index < array.length; index++)
    {
        count = callback(count,array[index],index,array)
    }
    return count
}
function newFindIndex(array,el)
{
    for(let index = 0;index < array.length;index++)
    {
        if(array[i] == el)
        {
            return index
        }
    }
    return -1
}
function newSome(array,callback)
{
    for(let index = 0;index < array.length;index++)
    {
        if(callback(array[index],index,array))
        {
            return true
        }
    }
    return false
}
function newEvery(array,callback)
{
    let arrayDeTrues = []
    for(let index = 0;index < array.length;index++)
    {
        if(callback(array[index],index,array))
        {
            arrayDeTrues.push(true)
        }
    }
    if(arrayDeTrues.length == array.length)
    {
        return true
    }
    return false
}
function newConcat(array1,array2)
{
   array1.push(array2)
   return array1
}
function newJoin(array,separador)
{
    let elemento = array[0]
    for(let index = 0;index < array.length;index++)
    {
        elemento += separador + array[index]
    }
    return elemento
}
