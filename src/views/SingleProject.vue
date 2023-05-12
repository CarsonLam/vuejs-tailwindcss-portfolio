<!-- 作品详情页 -->
<script>
import feather from "feather-icons";
import ProjectHeader from "../components/projects/ProjectHeader.vue";
import ProjectGallery from "../components/projects/ProjectGallery.vue";
import ProjectInfo from "../components/projects/ProjectInfo.vue";
import designSystem from "../data/designSystem";
import quest from "../data/quest";

// import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';
export default {
  name: "Projects",
  components: {
    ProjectHeader,
    ProjectGallery,
    ProjectInfo,
    // ProjectRelatedProjects,
  },

  data: () => {
    return {
      designSystem,
      quest,
      clickProjectSingle: {},

      selectedProject: {
        singleProjectHeader: {
          singleProjectTitle: "",
          singleProjectDate: "",
          singleProjectTag: "",
        },
        projectInfo: {
          companyInfos: [],
          objectivesDetails: "",
          technologies: [
            {
              title: "",
              techs: [],
            },
          ],
          projectDetails: [],
        },

        projectImages: [],
      },
      projectInfo: {
        clientHeading: "About Client",
        objectivesHeading: "Objective",
        projectDetailsHeading: "Challenge",
        socialSharingsHeading: "Share This",
      },
    };
  },

  mounted() {
    feather.replace();
    this.getclickProjectSingle();
  },

  updated() {
    feather.replace();
  },
  methods: {
    getclickProjectSingle() {
      this.clickProjectSingle = localStorage.getItem("clickProjectSingle");

      if (this.clickProjectSingle == 1) {
        this.selectedProject = designSystem;
      } else if (this.clickProjectSingle == 2) {
        this.selectedProject = quest;
      }

      //   console.log(this.projectImages);

      // this.clickProjectSingle = data
    },
  },
};
</script>

<template>
  <div class="container mx-auto mt-10 sm:mt-20">
    <!-- Project header -->
    <ProjectHeader :singleProjectHeader="selectedProject.singleProjectHeader" />

    <!-- Project information -->
    <ProjectInfo
      :projectInfo="projectInfo"
      :projectInfoContent="selectedProject.projectInfo"
    />

    <!-- Project related projects -->
    <!-- <ProjectRelatedProjects :relatedProject="relatedProject" /> -->

    <!-- Project gallery -->

    <ProjectGallery :projectImages="selectedProject.projectImages" />
  </div>
</template>

<style scoped></style>
