requirejs.config({
    baseUrl: 'assets/lib',
    paths: {
        app: '../../app'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/dist/feature/feature']);