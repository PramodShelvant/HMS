//const prop={dataSrc:'hello'}
export const admincoldata=[{data:'userId',title:'patientName'},
{data:'title',title:'patientName'},
{data:'title1',title:'patientName',mRender:( data, type, row, meta )=>`<NavLink onclick={console.log({prop})}>edit</button><button onclick={console.log('data')}>delete</NavLink>`}]

