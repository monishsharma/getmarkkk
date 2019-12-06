<template>
  <div>
    <div class="container">
      <div class="row col-md-8">
        <div class="col-md-6" v-for="(item, index) in call" :key="index">
          <div
            class="card"
            :style="{ backgroundImage: 'url(' + item.url + ')' }"
          >
            <img
              class="card-img"
              src="../../../assets/ratings-label-okay-112.png"
              alt="Bologna"
            />
            <div class="card-body"></div>
            <div
              class="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0"
            >
              <div class="views">
                <div
                  class=" avtar"
                  :style="{ backgroundImage: 'url(' + item.thumbnailUrl + ')' }"
                >
                  <div class="camera">
                    <img
                      src="../../../assets/icon-camera-regular-16-white-100-copy.png"
                      alt=""
                    />
                    <h6 class="cameraText">{{ item.id }}</h6>
                  </div>
                </div>
                <img
                  src="../../../assets/icon-heart-full-16-white-75-copy.png"
                  alt
                />
                <h6 class="like">{{ index + 1 }}</h6>
                <img
                  src="../../../assets/icon-comment-16-white-75-copy.png"
                  alt
                />
                <h6 class="like">{{ index + 2 }}</h6>
                <img
                  src="../../../assets/icon-share-16-white-75-copy.png"
                  alt
                />
                <h6 class="like">{{ index + 3 }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Card.js"></script>
<style src="./Card.css" scoped></style>
