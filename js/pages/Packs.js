
import Spinner from "../components/Spinner.js";

export default {
    components: { Spinner },
    template: `
        <main v-if="loading">
            <Spinner></Spinner>
        </main>
        <main v-else class="page-packs">
            <div class="packs-container">
                <table class="packs">
                    <tr>
                        <td class="One">
                                <button>
                                    <span class="type-label-lg">Top 1 Pack</span>
                                </button>
                            <div class="society">
                              <input type="checkbox" id="society" value="Society" v-model="society">
                              <label for="main">Society</label>
                            </div>
                            <div class="ts2">
                              <input type="checkbox" id="ts2" value="ts2" v-model="ts2y">
                              <label for="main">Thinking Space II</label>
                            </div>
                            <div class="amethyst">
                              <input type="checkbox" id="amethyst" value="amethyst" v-model="amethyst">
                              <label for="main">Amethyst</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="Two">
                            <button>
                            <span class="type-label-lg">Easy Extreme Pack</span>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="comingsoon-container">
                <div class="packs" v-if="packs">
                   <h1>Coming Soon!</h1>
                </div>
            </div>
      </main>
  `,
}
