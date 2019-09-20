package com.ggp.serverdemo.repository;

import com.ggp.serverdemo.model.Special;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(maxAge = 3600)
@RepositoryRestResource(collectionResourceRel = "specials", path = "specials")
public interface SpecialRepository extends PagingAndSortingRepository<Special, Long> {
}
