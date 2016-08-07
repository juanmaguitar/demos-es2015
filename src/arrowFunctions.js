var filterNumberMoreThan = ( aNumbers, min ) => aNumbers.filter( num => num>min )
var filterMapNumbers = ( aNumbers ) => {
	return aNumbers.filter( n => n%2 ).map( (n,i) => n*i );
}

export { filterNumberMoreThan, filterMapNumbers };