import AuthenticatedRoute from 'ghost-admin/routes/authenticated';

export default AuthenticatedRoute.extend({
    model(params) {
        return this.get('session.user').then(user => (
            this.store.createRecord(params.type, {authors: [user]})
        ));
    },

    // there's no specific controller for this route, instead all editor
    // handling is done on the editor route/controler
    setupController(controller, newPost) {
        let editor = this.controllerFor('editor');
        editor.setPost(newPost);
    }
});
