class NewsController {
    index(req, res) {
        res.render('new');
    }

    show(req, res) {
        res.send('new');
    }
}

module.exports = new NewsController();
