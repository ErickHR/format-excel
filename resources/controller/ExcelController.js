
const request = require('request')

const getData = async ( req, res ) => {

    request("http://localhost:3001/api",(err,response,body)=>{
        if (!err){
            
            try {
                
                const data = JSON.parse(body);
                let cantBigger = 0

                // data.forEach( item => {
                //     let lengthArray = Object.values( item ).length
                //     if( cantBigger < lengthArray  ) {
                //         cantBigger = lengthArray
                //     }

                // });


                const ExcelFormat = data.map( ( item ) => {
                    let  objectValuesItem= Object.values( item )
                    // if( cantBigger < objectValuesItem.length  ) {
                    //     cantBigger = objectValuesItem.length
                    // }
                    cantBigger = ( cantBigger < objectValuesItem.length ) ? objectValuesItem.length :  cantBigger
                    return objectValuesItem
                } )

                /* HEADER */
                const headers = []
                for (let index = 0; index < cantBigger; index++) {
                    headers.push( `HEADER${index+1}` )
                }
                
                
                /* HEADER OPCIONAL */
                // const headers = Object.keys( data[0] )
                

                ExcelFormat.unshift( headers )

                res.status(200).json( ExcelFormat )

            } catch (error) {
                console.log( error )
                res.send( 'error' )
            }
        }
        res.status(500).send( 'error' )

    })

}

module.exports = {
    getData
}