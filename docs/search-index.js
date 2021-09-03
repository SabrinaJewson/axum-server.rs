var searchIndex = JSON.parse('{\
"axum_server":{"doc":"axum-server is a <code>hyper</code> server implementation designed to …","t":[3,3,5,11,5,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,11,11,11,0,11,11,11,11,11,11,11,11,3,11,11,11,11,11,11,11,11,11,11,11,11,11,3,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["Handle","Server","bind","bind","bind_rustls","bind_rustls","borrow","borrow","borrow_mut","borrow_mut","certificate","certificate_file","clone","clone_into","default","default","from","from","graceful_shutdown","handle","into","into","listening","listening_addrs","loader","new","new","private_key","private_key_file","record","serve","serve_and_record","shutdown","tls","tls_config","to_owned","try_from","try_from","try_into","try_into","type_id","type_id","Recording","borrow","borrow_mut","bytes_received","bytes_sent","clone","clone_into","default","from","into","to_owned","try_from","try_into","type_id","TlsLoader","TlsServer","bind","bind_rustls","borrow","borrow","borrow_mut","borrow_mut","certificate","certificate","certificate_file","certificate_file","clone","clone_into","config","default","default","from","from","from","handle","into","into","load","loader","new","new","private_key","private_key","private_key_file","private_key_file","serve","serve_and_record","tls_config","to_owned","try_from","try_from","try_into","try_into","type_id","type_id"],"q":["axum_server","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","axum_server::record","","","","","","","","","","","","","","axum_server::tls","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["A struct that can be passed to a server for additional …","Configurable HTTP server, supporting HTTP/1.1 and HTTP2.","Shortcut for creating <code>Server</code> and calling <code>bind</code> on it.","Bind to a single address or multiple addresses.","Shortcut for creating <code>Server</code> and calling <code>bind_rustls</code> on …","Bind to a single address or multiple addresses. Using tls …","","","","","Set certificate(s) in PEM format.","Set certificate(s) from file in PEM format.","","","","","","","Signal server to gracefully shut down.","Provide a <code>Handle</code>.","","","Wait until server starts listening on all addresses.","Get addresses that are being listened.","Provide a <strong>loaded</strong> <code>TlsLoader</code>.","Create a new <code>Server</code>.","Create a <code>Handle</code>.","Set private key in PEM format.","Set private key from file in PEM format.","Recording utilities for servers.","Serve provided cloneable service on all binded addresses.","Serve provided cloneable service on all binded addresses.","Signal server to shut down.","Tls implementation for HTTP server.","Provide <code>ServerConfig</code> containing private key and …","","","","","","","","Type to access data that is being recorded in real-time.","","","Get recorded incoming bytes.","Get recorded outgoing bytes.","","","","","","","","","","A struct that can be passed to <code>TlsServer</code> to reload tls …","Configurable HTTP and HTTPS server, supporting HTTP/1.1 …","Bind to a single address or multiple addresses.","Bind to a single address or multiple addresses. Using tls …","","","","","Set certificate(s) in PEM format.","Set certificate(s) in PEM format.","Set certificate(s) from file in PEM format.","Set certificate(s) from file in PEM format.","","","Provide <code>ServerConfig</code> containing private key and …","","","","","","Provide a <code>Handle</code>.","","","Load private key or certificate(s).","Provide a <strong>loaded</strong> <code>TlsLoader</code>.","Create a new <code>TlsServer</code>.","Create a <code>TlsLoader</code>.","Set private key in PEM format.","Set private key in PEM format.","Set private key from file in PEM format.","Set private key from file in PEM format.","Serve provided cloneable service on all binded addresses.","Serve provided cloneable service on all binded addresses.","Provide <code>ServerConfig</code> containing private key and …","","","","","","",""],"i":[0,0,0,1,0,1,1,2,1,2,1,1,2,2,1,2,1,2,2,1,1,2,2,2,1,1,2,1,1,0,1,1,2,0,1,2,1,2,1,2,1,2,0,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,4,4,4,5,4,5,4,5,4,5,5,5,5,4,5,4,4,5,4,4,5,5,4,4,5,4,5,4,5,4,4,4,5,4,5,4,5,4,5],"f":[null,null,[[],["server",3]],[[]],[[],["tlsserver",3]],[[],["tlsserver",3]],[[]],[[]],[[]],[[]],[[["vec",3,["u8"]],["u8",15]],["tlsserver",3]],[[],["tlsserver",3]],[[],["handle",3]],[[]],[[],["server",3]],[[],["handle",3]],[[]],[[]],[[]],[[["handle",3]]],[[]],[[]],[[]],[[],[["vec",3,["socketaddr"]],["option",4,["vec"]]]],[[["tlsloader",3]],["tlsserver",3]],[[]],[[]],[[["vec",3,["u8"]],["u8",15]],["tlsserver",3]],[[],["tlsserver",3]],null,[[]],[[]],[[]],null,[[["arc",3,["serverconfig"]],["serverconfig",3]],["tlsserver",3]],[[]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],null,[[]],[[]],[[],["usize",15]],[[],["usize",15]],[[],["recording",3]],[[]],[[],["recording",3]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[["vec",3,["u8"]],["u8",15]]],[[["vec",3,["u8"]],["u8",15]]],[[]],[[]],[[],["tlsloader",3]],[[]],[[["arc",3,["serverconfig"]],["serverconfig",3]]],[[],["tlsserver",3]],[[],["tlsloader",3]],[[["server",3]]],[[]],[[]],[[["handle",3]]],[[]],[[]],[[]],[[["tlsloader",3]]],[[]],[[]],[[["vec",3,["u8"]],["u8",15]]],[[["vec",3,["u8"]],["u8",15]]],[[]],[[]],[[]],[[]],[[["arc",3,["serverconfig"]],["serverconfig",3]]],[[]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]]],"p":[[3,"Server"],[3,"Handle"],[3,"Recording"],[3,"TlsServer"],[3,"TlsLoader"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};