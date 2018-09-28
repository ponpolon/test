riot.tag2('samplea', '<h1>{name}</h1> <input type="text" name="text_1" value="sampleA" ref="message" oninput="{print}"> <button type="button" name="button_1" onclick="{print}">ボタン1</button>', '', '', function(opts) {
        console.log("sampleA");
        this.name = "sampleA";

        this.print = function(event){
            console.log("riot::button()");

            this.name = this.refs.message.value;
        }.bind(this)
});

riot.tag2('sampleb', '<h1>{name}</h1> <input type="text" name="text_1" value="sampleB" ref="message" oninput="{print}"> <button type="button" name="button_1" onclick="{print}">ボタン1</button>', '', '', function(opts) {
        this.name = "sampleB";

        this.print = function(event){
            console.log("riot::button()");

            this.name = this.refs.message.value;
        }.bind(this)
});