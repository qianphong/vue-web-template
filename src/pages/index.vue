<script lang="ts" setup>
const fileList = ref([])
</script>

<template>
  <div>
    <div bg-img-home bg-cover bg-center py-15>
      <div wrapper text-white>
        <div text-3xl font-bold tracking-widest>Lorem, ipsum.</div>
        <p max-w-screen-sm text-lg my-5>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
          soluta.
        </p>
      </div>
    </div>
    <div class="bg-gradient-to-b from-#FFFFFF to-#72AAF3 to-op-20" py-8>
      <div wrapper space-y-5>
        <h2 text-center text-xl sm:text-2xl font-bold>
          Lorem ipsum dolor sit amet.
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          cumque porro quam eum alias laudantium obcaecati dolor eius totam
          minus aspernatur dolorem reiciendis, qui ipsum repellat numquam. Aut
          adipisci odio rem commodi sunt consequatur nobis iure atque culpa ad
          minus consectetur laborum ipsa recusandae, minima, ipsum, officia enim
          dicta. Blanditiis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          dignissimos quod neque quos a voluptatem magni tempora velit, illum
          libero?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed,
          eaque quod totam sequi laborum eius quisquam perspiciatis doloribus
          earum, sunt iure a sapiente tempora, quia nobis ea officiis expedita
          cupiditate. Ratione similique esse sit delectus cumque excepturi nisi
          pariatur nesciunt, voluptates nemo vero praesentium nam omnis? Dolor
          doloremque porro repellat voluptatum asperiores, perspiciatis
          explicabo quidem a, sit excepturi suscipit amet nostrum aut vitae et
          obcaecati natus consequuntur magni nulla? Aperiam debitis possimus
          nihil nostrum fugiat, autem dignissimos enim placeat aliquam est illum
          sapiente. Non incidunt obcaecati, reiciendis aut esse iure suscipit
          voluptatem sint molestias qui est necessitatibus ad! Nihil iure
          possimus tenetur alias ipsa accusamus nulla vitae numquam eligendi,
          itaque dicta iusto, quis ex totam. Fugiat architecto aliquam dicta
          incidunt iure ex, unde deleniti natus, impedit error magni consectetur
          vero reprehenderit id ratione voluptatem nisi culpa sequi explicabo
          sit! Repellendus nisi ut amet corporis! Incidunt, rem voluptatem.
          Veritatis, qui tempore facilis iure odit reiciendis consequuntur saepe
          nobis in illo numquam laudantium dolore quo perspiciatis maiores rem
          sint alias rerum cum voluptate ratione? Repellat architecto doloremque
          praesentium harum obcaecati, facere atque, quis quaerat earum
          blanditiis nisi inventore officiis nemo delectus eum maxime nihil
          deleniti provident voluptatibus consectetur neque illo dolore impedit.
          Minus tempora ad saepe voluptatum beatae exercitationem quam nostrum
          rerum impedit earum? Voluptas sequi autem, molestiae minima, atque
          blanditiis, nesciunt fuga deleniti et totam nemo est itaque dolorum
          deserunt vel! Nisi velit, cum voluptatum laborum quisquam, facere
          quasi hic voluptas cumque qui explicabo harum enim fuga. Accusantium
          fugit eaque iste animi aspernatur veritatis numquam quam ea vero
          explicabo! Voluptas, voluptatibus similique! Ipsa reprehenderit sint
          laboriosam, atque a quis autem voluptatem rerum velit molestiae ullam
          praesentium quam exercitationem itaque quod repudiandae quae
          recusandae quaerat nemo maxime laudantium nesciunt officiis delectus
          inventore? Aliquid voluptate doloribus veritatis et iure! Voluptatum
          assumenda fugit nostrum commodi debitis aperiam. Maxime totam laborum
          possimus perferendis facere dignissimos voluptatem a in. Nemo,
          recusandae est sit delectus fugiat harum perspiciatis unde repellendus
          reprehenderit possimus excepturi eius eos consectetur aut, numquam
          esse. Sunt a iste quidem optio hic ad blanditiis alias soluta quaerat
          laboriosam. A laboriosam saepe ratione illum reiciendis qui quod neque
          repudiandae cupiditate voluptates delectus eveniet, et minima maxime,
          eum maiores eos molestias quis optio asperiores expedita? Et, neque.
          Illo non impedit quia. Adipisci eum ratione autem voluptatem dolores
          perspiciatis sequi quas saepe reprehenderit optio ab in voluptatibus,
          amet, iste nam. Consectetur iste, eos incidunt porro eius dolorum,
          odio rem sunt mollitia quibusdam repellendus quia facere labore
          distinctio similique impedit quae hic nostrum perferendis itaque iure!
          Corrupti libero animi at cum voluptas ex reiciendis sed eum sint quasi
          nesciunt molestias enim tempora vitae consectetur, pariatur nihil
          beatae consequuntur! Corporis laudantium nulla et porro. Explicabo
          quaerat at neque sint mollitia vitae veritatis labore. Incidunt
          recusandae aspernatur reiciendis deserunt quisquam sunt provident ad a
          consectetur commodi distinctio perferendis iste, sed, mollitia
          consequatur molestiae ducimus sequi earum fuga! Rem, reprehenderit
          expedita? Quod commodi excepturi rem est, veritatis minima deserunt
          harum suscipit. Alias saepe fugiat officia ipsa laudantium facilis
          eaque et.
        </p>
      </div>
    </div>
    <div w-100 mx-a bg-white p-10 my-5 rounded>
      <Upload v-model:file-list="fileList" />
    </div>
  </div>
</template>

<route lang="yaml">
name: Home
meta:
  top: true
</route>
