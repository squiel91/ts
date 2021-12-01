// OPTIONAL CHAINING

// is part of Ts, even thoug is already incorporated into javascript (since node >= 14), using --harmony flag
// data?.person?.position
// mayReutrnNull()?.position

// Nullish Coalescing
// great when you want to return something different when it is only null or undefined

null ?? true // true
undefined ?? true // true
// anythingElse ?? true // yelds anything else