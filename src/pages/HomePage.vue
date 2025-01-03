<template>
    <Navbar />
    <div class="w-full px-20 flex flex-col gap-20 ">
        <section id="hero-section" class="w-full h-screen py-20">
            <div class="w-full">
                <p class="text-xl font-light">Hello, I'm Artena</p>
                <h1 class="text-[95px] font-bold">Helping Brands Achieve 
                    <span class="font-normal italic">Digital Excellence</span>
                </h1>
            </div>
            <div>

            </div>
            <div class="w-full flex justify-between mt-20 font-medium">
                <div>
                    <p>Located in 
                    <br>Surakarta, Indonesia </p>
                </div>
                <div>
                    <p>Currently available for 
                    <br>freelance worldwide 🌎</p>
                </div>
            </div>
        </section>

        <section id="about-section">
            <h2 class="font-medium text-5xl mb-5">About Me</h2>
            <div class="w-full flex gap-5">
                <div class="w-2/5 flex flex-col gap-5">
                    <p>I’m freelance web designer and co-founder of Okey Studio, a studio focused on creating tailor-made websites.</p>
                    <button class="text-md font-medium text-left w-auto">Discover Cicle Studio</button>
                </div>
                <div class="w-full text-2xl font-medium flex flex-col gap-5 leading-8">
                    <p>I prioritize clean and organized layouts, clear and clean typography, and meticulous alignment in all my designs. This focus on user-friendliness stems from my passion for minimalism. I believe in maximizing the impact of a brand's message, story, and visuals  through each creation.</p>
                    <p>My background in training and designing presentations for domestic enterprises for many years has instilled in me a deep understanding of layout, content handling, and incorporating motion effects. Now, I leverage this expertise, along with my knowledge of front-end programming, to create beautiful and functional websites.</p>
                </div>
            </div>
        </section>

        <section id="selected-works">
            <h2 class="text-5xl font-medium pb-5">Selected Work</h2>
            <div class="flex flex-col gap-20">
                <div class="w-full flex justify-between gap-10">
                    <Card
                        image="/src/assets/images/design.png"
                        title="Green Probolinggo"
                        category="Dashboard, Website Design"
                    />
                    <Card
                        image="/src/assets/images/design.png"
                        title="Manis Grafika"
                        category="Wordpress, Website Design"
                    />
                </div>
                <div class="w-full flex justify-between gap-10">
                    <Card
                        image="/src/assets/images/design.png"
                        title="The Investor"
                        category="Website Design, Wordpress"
                    />
                    <Card
                        image="/src/assets/images/design.png"
                        title="GSTC Council"
                        category="Website Design"
                    />
                </div>
            </div>
        </section>

    </div>
</template>

<script lang="ts">
    import Navbar from '../components/Navbar.vue';
    import Card from '../components/ProjectCard.vue';

    export default {
        name: "HomePage",
        components: {
            Navbar, Card,
        },
    };
</script>

<style scoped>

</style>