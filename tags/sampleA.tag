<sampleA>
    <h1>{name}</h1>
    
    <input type="text" name="text_1" value="sampleA" ref="message" oninput={print}>
    
    <button type="button" name="button_1" onclick={print}>ボタン1</button>
    
    <script>
        console.log("sampleA");
        this.name = "sampleA";
        // this.mixin("ConsoleLog");
        // this.output("riot!");

        print(event){
            console.log("riot::button()");
            // console.log(event.target.name + ":" + );
            this.name = this.refs.message.value;
        }
    </script>
</sampleA>

<sampleB>
    <h1>{name}</h1>
    
    <input type="text" name="text_1" value="sampleB" ref="message" oninput={print}>
    
    <button type="button" name="button_1" onclick={print}>ボタン1</button>
    
    <script>
        this.name = "sampleB";
        // this.mixin("ConsoleLog");
        // this.output("riot!");

        print(event){
            console.log("riot::button()");
            // console.log(event.target.name + ":" + );
            this.name = this.refs.message.value;
        }
    </script>
</sampleB>