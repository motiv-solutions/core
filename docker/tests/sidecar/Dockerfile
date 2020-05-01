# OpenJDK distributed under GPLv2+Oracle Classpath Exception license (http://openjdk.java.net/legal/gplv2+ce.html)
# Alpine Linux packages distributed under various licenses including GPL-3.0+ (https://pkgs.alpinelinux.org/packages)
FROM dotcms/dotcms-seed as build-cms

LABEL com.dotcms.contact "support@dotcms.com"
LABEL com.dotcms.vendor "dotCMS LLC"
LABEL com.dotcms.description "dotCMS Content Management System"

#  One of ["TARBALL_URL", "RELEASE", "NIGHTLY", "COMMIT", "TAG" ]
ARG BUILD_FROM=COMMIT

#  Value resolved in the context of $BUILD_FROM
ARG BUILD_ID=HEAD

WORKDIR /srv

# dotCMS core distributed under GPLv3 license (https://github.com/dotCMS/core/blob/master/license.txt)
COPY build-src/ /build/
RUN chmod 500 /build/build_dotcms.sh && /build/build_dotcms.sh ${BUILD_FROM} ${BUILD_ID}

RUN mkdir -p /srv/utils /srv/templates /srv/config /srv/home
RUN chmod -R 666 /srv && find /srv/ -type d -exec chmod a+x {} \;

##
## Begin target image build
##

# OpenJDK distributed under GPLv2+Oracle Classpath Exception license (http://openjdk.java.net/legal/gplv2+ce.html)
# Alpine Linux packages distributed under various licenses including GPL-3.0+ (https://pkgs.alpinelinux.org/packages)
FROM openjdk:8-jdk-alpine

WORKDIR /srv

RUN apk --no-cache upgrade \
    && apk add --no-cache bash openssl ca-certificates gnupg grep sed tini nss s6-dns \
    && update-ca-certificates

RUN apk --no-cache add libc6-compat tomcat-native && apk add libsass --no-cache --repository http://dl-cdn.alpinelinux.org/alpine/edge/community/

# This is a nasty hack for libjsass, Alpine 3.9 no longer has a deprecated symlink in /lib
RUN [ ! -e /lib/ld-linux-x86-64.so.2 ] &&  ln -s $(readlink /lib64/ld-linux-x86-64.so.2) /lib/ld-linux-x86-64.so.2 || :

# Dockerize distributed under MIT license (https://github.com/jwilder/dockerize)
ENV DOCKERIZE_VERSION v0.6.0
RUN wget --quiet https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -xzf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz -C /usr/local/bin \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY --from=build-cms /srv/ /srv/
COPY ROOT/ /

# Make scripts runable
RUN find /srv/ -type f -name "*.sh" -exec chmod a+x {} \;

# Make plugin merging directories writable
RUN find /srv/templates -type d -exec chmod 770 {} \;

RUN mkdir -p /data/shared/assets && mkdir -p /data/local/dotsecure/license && chmod -R 660 /data && find /data/ -type d -exec chmod 770 {} \;

ENV SERVICE_DELAY_DEFAULT_MIN 1
ENV SERVICE_DELAY_DEFAULT_STEP 3
ENV SERVICE_DELAY_DEFAULT_MAX 30

#VOLUME /data/local

## Ports
# Direct connect
EXPOSE 8080
# Connect from proxy, HTTP/80, non-secure
EXPOSE 8081
# Connect from proxy, HTTPS/443, secure
EXPOSE 8082
# Java Debugging - must be configured via CMS_JAVA_OPTS
EXPOSE 8000
# Glowroot profiler - must be configured via CMS_JAVA_OPTS
EXPOSE 4000

USER 1000000000

ENTRYPOINT ["/sbin/tini", "--", "/srv/entrypoint.sh"]
CMD ["dotcms"]








































#ARG FROM_IMAGE
#FROM ${FROM_IMAGE} as dotcms-sidecar
#
## Location for assets, indexes and felix
#RUN mkdir -p /custom \
#    && mkdir -p /custom/assets \
#    && mkdir -p /custom/dotsecure \
#    && mkdir -p /custom/esdata \
#    && mkdir -p /custom/felix \
#    && mkdir -p /custom/output
#
#ARG BUILD_FROM=COMMIT
#ENV BUILD_FROM=${BUILD_FROM}
#ARG BUILD_ID=origin/master
#ENV BUILD_ID=${BUILD_ID}
#ARG BUILD_HASH
#ENV BUILD_HASH=${BUILD_HASH}
#
##  In order to run the integration test a license must be provided
#ARG LICENSE_KEY
#
#USER 0
#RUN apk update && apk --no-cache add bash grep python py-crcmod openssh-client gnupg libc6-compat git nodejs-current nodejs-current-dev sed curl coreutils
#
## Installing gcloud
## (https://github.com/GoogleCloudPlatform/cloud-sdk-docker/blob/master/alpine/Dockerfile)
## https://cloud.google.com/sdk/docs/
#ARG CLOUD_SDK_VERSION=256.0.0
#ENV CLOUD_SDK_VERSION=$CLOUD_SDK_VERSION
#ENV PATH /google-cloud-sdk/bin:$PATH
#RUN curl -O https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/google-cloud-sdk-${CLOUD_SDK_VERSION}-linux-x86_64.tar.gz && \
#    tar xzf google-cloud-sdk-${CLOUD_SDK_VERSION}-linux-x86_64.tar.gz && \
#    rm google-cloud-sdk-${CLOUD_SDK_VERSION}-linux-x86_64.tar.gz && \
#    gcloud config set core/disable_usage_reporting true && \
#    gcloud config set component_manager/disable_update_check true && \
#    gcloud config set metrics/environment github_docker_image && \
#    gcloud --version
#
#WORKDIR /srv
#
## dotCMS core distributed under GPLv3 license (https://github.com/dotCMS/core/blob/master/license.txt)
#COPY setup/build-src/checkout.sh /build/checkout.sh
#RUN chmod 500 /build/checkout.sh && /build/checkout.sh ${BUILD_FROM} ${BUILD_ID}
#
#COPY setup/build-src/overrideProperties.sh /build/overrideProperties.sh
#RUN chmod 500 /build/overrideProperties.sh && /build/overrideProperties.sh
#
#COPY setup/build-src/prepareTests.sh /build/prepareTests.sh
#RUN chmod 500 /build/prepareTests.sh && /build/prepareTests.sh
#
#COPY setup/build-src/prepareLicense.sh /build/prepareLicense.sh
#RUN chmod 500 /build/prepareLicense.sh && /build/prepareLicense.sh ${LICENSE_KEY}
#
#COPY setup/build-src/displayDebugData.sh /build/displayDebugData.sh
#RUN chmod 500 /build/displayDebugData.sh && /build/displayDebugData.sh ${BUILD_FROM} ${BUILD_ID} ${BUILD_HASH}
#
## ===========================================
##  Copy our custom data to the source code  #
#COPY setup/ROOT/ /build/src/core/dotCMS/src/
## ===========================================
#
#VOLUME /db
#VOLUME /custom/output
#
#USER 1000000000
