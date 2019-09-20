package com.ggp.serverdemo.repository;

import com.ggp.serverdemo.model.Special;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "specials", path = "specials")
public interface SpecialRepository extends PagingAndSortingRepository<Special, Long> {
}
