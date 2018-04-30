package com.dotmarketing.portlets.htmlpageasset.business.render;

import com.dotcms.rendering.velocity.services.VelocityResourceKey;

import com.dotmarketing.beans.ContainerStructure;
import com.dotmarketing.business.APILocator;
import com.dotmarketing.business.UserAPI;
import com.dotmarketing.exception.DotDataException;
import com.dotmarketing.exception.DotSecurityException;
import com.dotmarketing.portlets.containers.business.ContainerAPI;
import com.dotmarketing.portlets.containers.model.Container;
import com.dotmarketing.portlets.htmlpageasset.model.HTMLPageAsset;
import com.dotmarketing.util.PageMode;
import com.dotmarketing.util.VelocityUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.apache.velocity.context.Context;

import com.google.common.collect.Table;
import com.liferay.portal.model.User;

/**
 * Builder of {@link ContainerRendered}
 */
public class ContainerRenderedBuilder {

    private final UserAPI userAPI;
    private final ContainerAPI containerAPI;

    public ContainerRenderedBuilder() {
        userAPI = APILocator.getUserAPI();

        containerAPI = APILocator.getContainerAPI();
    }

    public List<ContainerRendered> getContainers(final HTMLPageAsset page,PageMode mode)
            throws DotSecurityException, DotDataException {
        final User systemUser = this.userAPI.getSystemUser();
        Table<String, String, Set<String>> pageContents = APILocator.getMultiTreeAPI().getPageMultiTrees(page, mode.showLive);
        final List<ContainerRendered> containers = new ArrayList<>();
        
        if (!pageContents.isEmpty()) {
            for (final String containerId : pageContents.rowKeySet()) {
                for (final String uniqueId : pageContents.row(containerId)
                    .keySet()) {

                    final Container container = (mode.showLive) ? (Container) APILocator.getVersionableAPI()
                            .findLiveVersion(containerId, systemUser, false)
                            : (Container) APILocator.getVersionableAPI()
                            .findWorkingVersion(containerId, systemUser, false);
                            
                            final List<ContainerStructure> containerStructures = this.containerAPI.getContainerStructures(container);
                            
                            containers.add(new ContainerRendered(container, containerStructures, uniqueId));
        
                }
            }
        }
                            
        return containers;
    }

    public List<ContainerRendered> getContainersRendered(final HTMLPageAsset page, final Context velocityContext,
                                                         PageMode mode )

            throws DotSecurityException, DotDataException {

        List<ContainerRendered> containers = this.getContainers(page, mode);
        renderContainer(containers, velocityContext, mode);
        return containers;
    }

    private void renderContainer(final List<ContainerRendered> containers, final Context velocityContext, PageMode mode )
            throws DotSecurityException, DotDataException {


        for (final ContainerRendered containerView : containers) {
            final Container container = containerView.getContainer();
            VelocityResourceKey key = new VelocityResourceKey(container,containerView.getUuid(), mode);

            try {

                final String rendered = VelocityUtil.mergeTemplate(key.path, velocityContext);
                containerView.setRendered(rendered);
            } catch (Exception e) {
                throw new DotDataException(String.format("Container '%s' could not be " +
                        "rendered via " + "Velocity.", container.getIdentifier()), e);
            }
        }
    }
}