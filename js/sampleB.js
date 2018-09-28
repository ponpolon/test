<sampleB>
riot.tag2('h1', '{name}', '', '', function(opts) {
});
    
    <input type="text" name="text_1" value="sampleB" ref="message" oninput={print}>
    
riot.tag2('button', 'ボタン1', '', 'type="button" name="button_1" onclick="{print}"', function(opts) {
});
    
riot.tag2('script', '', '', '', function(opts) {
    console.log("sampleB");
    this.name = "sampleB";
    this.mixin("ConsoleLog");

    this.print = function(event){
        console.log("riot::button()");

        this.name = this.refs.message.value;
    }.bind(this)
});
</sampleB