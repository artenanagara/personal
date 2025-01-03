<template>
    <div class="project-page p-5">
        <h1 class="text-3xl font-bold mb-5">Projects</h1>
        <div class="projects-list flex flex-col">
            <div v-for="project in projects" :key="project.id" class="project-item mb-5">
                <h2 class="text-2xl font-semibold">{{ project.name }}</h2>
                <p class="mt-2 text-xs">{{ project.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectPage',
    data() {
        return {
            projects: [
                { id: 1, name: 'Project One', description: 'Description for project one.' },
                { id: 2, name: 'Project Two', description: 'Description for project two.' },
                // Add more projects as needed
            ]
        };
    }
};
</script>

<style scoped>
/* No additional styles needed as Tailwind CSS is used */
</style>
