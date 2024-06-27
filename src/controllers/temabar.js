const temabar = require("../models/temabar");

class Temabar {
    async cheat(req, res) {
        const { email } = req.body;

        try {
            const token = await temabar.visit();
            await temabar.register(email, token);
            const prize_name = await temabar.finish(token);

            res.status(200).json({"message": `Du vandt (${prize_name}) og har modtaget en mail`});
        } catch (error) {
            res.status(500).json({ error: `Internal server error: ${error.message}` });
        }
    }
}

module.exports = new Temabar();