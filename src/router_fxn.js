

export const navigate = (path, history, fxn)=> {

    
    let type = history.location.pathname === '/about' ? 'push' : 'replace';
    
    if(type === 'push') {
        history.push({ 
            pathname:path
        });
    }
    if(type === 'replace'){
        history.replace({ 
            pathname:path
        });
    }

    if(fxn) fxn();

}