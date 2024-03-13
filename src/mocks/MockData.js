import {Server} from "miragejs"

new Server({
    routes() {
        this.namespace = "api";

        this.get("/users/", () => {
            return [
                { name: "Angy", surname: "T." },
                { name: "Chris", surname: "B." },
                { name: "Juliana", surname: "Crain" }
            ];
        });
    }
});
