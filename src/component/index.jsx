function index(props){
    const datas=props.datas
    return(
        <>
                              <table className='table table-bodered'>
                    <thead>
                    <tr>
                      
                     <th>Name</th> <th>Sector</th> <th>Agree with condition</th>  <th>Action</th>
                     </tr>
                    </thead>
                    <tbody>
                        {datas.map((data)=>(
                          <tr>
                           
                          <td>{data.name}</td>
                          <td>{data.sector}</td>
                          <td>Yes</td>
                          <td><button onClick={props.edit}>Edit</button></td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
        </>
    )
}
export default index