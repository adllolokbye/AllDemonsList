
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
                        <td class="soon">
                            <p>Top 1 Pack</p>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="comingsoon-container">
                <div class="pack">
                   <h1>
                   Coming Soon!</h1>
                </div>
            </div>
      </main>
  `,
}
